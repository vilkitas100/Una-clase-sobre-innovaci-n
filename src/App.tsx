/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { StudentBar } from './components/StudentBar';
import { Hour1Content } from './components/Hour1Content';
import { Hour2Content } from './components/Hour2Content';
import { Hour3Content } from './components/Hour3Content';
import { TermUnlockModal } from './components/TermUnlockModal';
import { ProfesorGuiaModal } from './components/ProfesorGuiaModal';
import { CertificateModal } from './components/CertificateModal';

import { StudentProfile, InnovationTerm } from './types';
import { INNOVATION_TERMS } from './data/courseData';
import { StudentMemoryAgent } from './services/memoryAgent';

export default function App() {
  // Load initial memory state from Agent Memory
  const initialMemory = StudentMemoryAgent.loadProgress();

  const [studentProfile, setStudentProfile] = useState<StudentProfile>(initialMemory.profile);
  const [activeHour, setActiveHour] = useState<1 | 2 | 3>(initialMemory.activeHour);
  const [lastSavedAt, setLastSavedAt] = useState<string>(initialMemory.lastSavedAt);

  // Modals
  const [selectedTermForUnlock, setSelectedTermForUnlock] = useState<InnovationTerm | null>(null);
  const [isProfesorOpen, setIsProfesorOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);

  // Auto-save to Agent Memory on profile or activeHour change
  useEffect(() => {
    const timestamp = StudentMemoryAgent.saveProgress(studentProfile, activeHour);
    setLastSavedAt(timestamp);
  }, [studentProfile, activeHour]);

  // Profile update handler
  const handleUpdateStudentName = (name: string, teamName: string) => {
    setStudentProfile((prev) => ({
      ...prev,
      name,
      teamName
    }));
  };

  // Add score handler
  const handleAddScore = (points: number) => {
    setStudentProfile((prev) => ({
      ...prev,
      innovationScore: prev.innovationScore + points
    }));
  };

  // Unlock Term handler
  const handleSuccessUnlockTerm = (termId: string) => {
    setStudentProfile((prev) => {
      if (prev.unlockedTerms.includes(termId)) return prev;

      const newUnlocked = [...prev.unlockedTerms, termId];
      const newScore = prev.innovationScore + 50;

      // Update progress percent
      const totalTerms = INNOVATION_TERMS.length;
      const termProgress = (newUnlocked.length / totalTerms) * 40;
      const hourProgress = (prev.currentHour / 3) * 60;
      const newProgress = Math.min(100, Math.round(termProgress + hourProgress));

      // Unlock badges if thresholds reached
      const updatedBadges = prev.badges.map((b) => {
        if (b.id === 'wef_pioneer' && termId === 'term_wef_4ir') {
          return { ...b, earnedAt: new Date().toISOString() };
        }
        if (b.id === 'neuro_thinker' && termId === 'term_growth_mindset') {
          return { ...b, earnedAt: new Date().toISOString() };
        }
        if (b.id === 'design_architect' && termId === 'term_blue_ocean') {
          return { ...b, earnedAt: new Date().toISOString() };
        }
        if (b.id === 'disruptive_master' && termId === 'term_xaas') {
          return { ...b, earnedAt: new Date().toISOString() };
        }
        return b;
      });

      return {
        ...prev,
        unlockedTerms: newUnlocked,
        innovationScore: newScore,
        progressPercent: newProgress,
        badges: updatedBadges
      };
    });
  };

  // Mental exercise completion
  const handleCompleteMentalExercise = (bonus: number) => {
    handleAddScore(bonus);
  };

  // Save Design Thinking Idea
  const handleSaveDesignIdea = (idea: any) => {
    setStudentProfile((prev) => ({
      ...prev,
      designThinkingIdea: idea,
      innovationScore: prev.innovationScore + 60,
      progressPercent: Math.max(prev.progressPercent, 65)
    }));
  };

  // Save Business Model
  const handleSaveBusinessModel = (model: any) => {
    setStudentProfile((prev) => ({
      ...prev,
      createdBusinessModel: model,
      innovationScore: prev.innovationScore + 80,
      progressPercent: Math.max(prev.progressPercent, 90)
    }));
  };

  // Hour Switching & Advancing
  const handleSelectHour = (hour: 1 | 2 | 3) => {
    setActiveHour(hour);
    setStudentProfile((prev) => ({
      ...prev,
      currentHour: Math.max(prev.currentHour, hour) as 1 | 2 | 3,
      progressPercent: Math.max(prev.progressPercent, hour === 1 ? 25 : hour === 2 ? 60 : 85)
    }));
  };

  // Memory Agent Code Sync & Reset Handlers
  const handleGenerateSyncCode = () => {
    return StudentMemoryAgent.generateSyncCode(studentProfile, activeHour);
  };

  const handleRestoreFromSyncCode = (code: string) => {
    const restored = StudentMemoryAgent.restoreFromSyncCode(code);
    if (restored) {
      setStudentProfile(restored.profile);
      setActiveHour(restored.activeHour);
      setLastSavedAt(restored.lastSavedAt);
      return true;
    }
    return false;
  };

  const handleResetProgress = () => {
    const fresh = StudentMemoryAgent.resetMemory();
    setStudentProfile(fresh.profile);
    setActiveHour(fresh.activeHour);
    setLastSavedAt(fresh.lastSavedAt);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col font-sans">
      
      {/* Top Bar Header */}
      <Header
        studentProfile={studentProfile}
        activeHour={activeHour}
        onSelectHour={handleSelectHour}
        onOpenProfesorGuia={() => setIsProfesorOpen(true)}
        onOpenCertificate={() => setIsCertificateOpen(true)}
      />

      {/* Student Identity & Persistent Progress Bar */}
      <StudentBar
        studentProfile={studentProfile}
        lastSavedAt={lastSavedAt}
        onUpdateName={handleUpdateStudentName}
        onGenerateSyncCode={handleGenerateSyncCode}
        onRestoreFromSyncCode={handleRestoreFromSyncCode}
        onResetProgress={handleResetProgress}
      />

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-8">
        {activeHour === 1 && (
          <Hour1Content
            studentProfile={studentProfile}
            terms={INNOVATION_TERMS}
            onOpenTermUnlock={(term) => setSelectedTermForUnlock(term)}
            onCompleteMentalExercise={handleCompleteMentalExercise}
            onAdvanceToNextHour={() => handleSelectHour(2)}
          />
        )}

        {activeHour === 2 && (
          <Hour2Content
            studentProfile={studentProfile}
            terms={INNOVATION_TERMS}
            onOpenTermUnlock={(term) => setSelectedTermForUnlock(term)}
            onSaveDesignIdea={handleSaveDesignIdea}
            onAdvanceToNextHour={() => handleSelectHour(3)}
            onAddScore={handleAddScore}
          />
        )}

        {activeHour === 3 && (
          <Hour3Content
            studentProfile={studentProfile}
            terms={INNOVATION_TERMS}
            onOpenTermUnlock={(term) => setSelectedTermForUnlock(term)}
            onSaveBusinessModel={handleSaveBusinessModel}
            onCompleteWorkshop={handleCompleteMentalExercise}
            onAddScore={handleAddScore}
            onOpenCertificate={() => setIsCertificateOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>Masterclass de Innovación · Clase 9: La Era Digital & Modelos de Negocio Emergentes</span>
          <span>Guardo Automático de Avance Activo · Memoria Local del Agente</span>
        </div>
      </footer>

      {/* Modals */}
      {selectedTermForUnlock && (
        <TermUnlockModal
          term={selectedTermForUnlock}
          isOpen={!!selectedTermForUnlock}
          onClose={() => setSelectedTermForUnlock(null)}
          onSuccessUnlock={handleSuccessUnlockTerm}
        />
      )}

      <ProfesorGuiaModal
        isOpen={isProfesorOpen}
        onClose={() => setIsProfesorOpen(false)}
        studentName={studentProfile.name}
        teamName={studentProfile.teamName}
      />

      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        studentProfile={studentProfile}
      />

    </div>
  );
}
