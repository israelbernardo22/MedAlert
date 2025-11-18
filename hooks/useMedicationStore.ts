import { useState, useEffect, useCallback } from 'react';
import { Medication, HistoryEntry, Profile } from '../types';

const STORAGE_KEY = 'medalert-data';

const getTodayDateString = () => new Date().toISOString().split('T')[0];

const initialProfiles: Profile[] = [
  { id: 'user-1', name: 'Você', relation: 'Titular' },
  { id: 'user-2', name: 'Maria Silva', relation: 'Mãe' },
  { id: 'user-3', name: 'João Silva', relation: 'Pai' },
];

const initialMedications: Medication[] = [
  { id: 'med-1', profileId: 'user-1', name: 'Losartana', dosage: '50mg', schedule: { type: 'daily', times: ['08:00'] }, startDate: getTodayDateString(), duration: 'continuous' },
  { id: 'med-2', profileId: 'user-1', name: 'Metformina', dosage: '850mg', schedule: { type: 'daily', times: ['12:00'] }, startDate: getTodayDateString(), duration: 'continuous' },
  { id: 'med-3', profileId: 'user-1', name: 'Omeprazol', dosage: '20mg', schedule: { type: 'daily', times: ['14:00'] }, startDate: getTodayDateString(), duration: 30 },
  { id: 'med-4', profileId: 'user-1', name: 'Sinvastatina', dosage: '40mg', schedule: { type: 'daily', times: ['20:00'] }, startDate: getTodayDateString(), duration: 'continuous' },
  { id: 'med-5', profileId: 'user-2', name: 'Atenolol', dosage: '25mg', schedule: { type: 'daily', times: ['09:00', '21:00'] }, startDate: getTodayDateString(), duration: 'continuous' },
  { id: 'med-6', profileId: 'user-3', name: 'Clopidogrel', dosage: '75mg', schedule: { type: 'daily', times: ['10:00'] }, startDate: getTodayDateString(), duration: 90 },
];


interface AppData {
  profiles: Profile[];
  medications: Medication[];
  history: HistoryEntry[];
}

const getInitialData = (): AppData => {
    try {
        const storedData = localStorage.getItem(STORAGE_KEY);
        if (storedData) {
            const parsed = JSON.parse(storedData);
            // Basic data validation
            if (parsed.profiles && parsed.medications && parsed.history) {
              return parsed;
            }
        }
    } catch (error) {
        console.error("Failed to load data from localStorage", error);
    }
    // If no stored data, return initial mock data
    return {
        profiles: initialProfiles,
        medications: initialMedications,
        history: [{
          id: 'hist-1',
          profileId: 'user-1',
          medication: { id: 'med-1', name: 'Losartana', dosage: '50mg' },
          status: 'taken',
          timestamp: new Date().toISOString(),
          scheduledTime: '08:00',
        }],
    };
};


export const useStore = () => {
  const [data, setData] = useState<AppData>(getInitialData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      setData(getInitialData());
      setIsLoaded(true);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [data, isLoaded]);

  const addMedication = useCallback((med: Omit<Medication, 'id'>) => {
    const newMed = { ...med, id: `med-${Date.now()}` };
    setData(prev => ({ ...prev, medications: [...prev.medications, newMed] }));
  }, []);

  const updateMedication = useCallback((updatedMed: Medication) => {
    setData(prev => ({ ...prev, medications: prev.medications.map(med => med.id === updatedMed.id ? updatedMed : med) }));
  }, []);
  
  const deleteMedication = useCallback((id: string) => {
    setData(prev => {
        const newMeds = prev.medications.filter(med => med.id !== id);
        const newHistory = prev.history.filter(entry => entry.medication.id !== id);
        return { ...prev, medications: newMeds, history: newHistory };
    });
  }, []);

  const recordDosage = useCallback((entry: Omit<HistoryEntry, 'id'>) => {
    const newEntry = { ...entry, id: `hist-${Date.now()}` };
    setData(prev => ({...prev, history: [newEntry, ...prev.history]}));
  }, []);

  const addProfile = useCallback((profile: Omit<Profile, 'id'>) => {
    const newProfile = { ...profile, id: `user-${Date.now()}` };
    setData(prev => ({ ...prev, profiles: [...prev.profiles, newProfile] }));
  }, []);


  return { ...data, addMedication, updateMedication, deleteMedication, recordDosage, addProfile };
};