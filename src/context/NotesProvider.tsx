import {ReactNode, useReducer} from 'react';
import {NotesContext} from './NotesContext';
import {Note} from '../types/note.ts';
import {notesReducer} from './notesReducer.ts'

export type NotesState = {
    notes: Note[]
    activeNote: Note | null
}

const initialNotes: NotesState = {
    notes: [
        {
            id: "1e39a5b0-1e23-4c72-a6b2-76c3b839c641",
            title: "React Performance Optimization",
            tags: ["Dev", "React"],
            content: "Key performance optimization techniques:\n\n1. Code Splitting\n- Use React.lazy() for route-based splitting\n- Implement dynamic imports for heavy components\n\n2. Memoization\n- useMemo for expensive calculations\n- useCallback for function props\n- React.memo for component optimization\n\n3. Virtual List Implementation\n- Use react-window for long lists\n- Implement infinite scrolling\n\nTODO: Benchmark current application and identify bottlenecks",
            lastEdited: "2024-10-29T10:15:00Z",
            isArchived: false
        },
        {
            id: "e0b1c0e7-0f1c-4f8c-9b2a-1a2b3c4d5e6f",
            title: "Japan Travel Planning",
            tags: ["Travel", "Personal"],
            content: "Japan Trip Planning - Spring 2025\n\nItinerary Draft:\nWeek 1: Tokyo\n- Shibuya and Harajuku\n- TeamLab Digital Art Museum\n- Day trip to Mount Fuji\n\nWeek 2: Kyoto & Osaka\n- Traditional temples\n- Cherry blossom viewing\n- Food tour in Osaka\n\nBudget: $3000\nAccommodation: Mix of hotels and traditional ryokans\nJR Pass: 14 days\n\nTODO: Book flights 6 months in advance",
            lastEdited: "2024-10-28T16:45:00Z",
            isArchived: false
        },
        {
            id: "f2e1d0c9-b8a7-6f5e-4d3c-2b1a-0e7c1b0a9e3f",
            title: "Favorite Pasta Recipes",
            tags: ["Cooking", "Recipes"],
            content: "Classic Italian Recipes:\n\n1. Carbonara\n- Eggs, pecorino, guanciale\n- No cream ever!\n- Save pasta water\n\n2. Cacio e Pepe\n- Pecorino Romano\n- Fresh black pepper\n- Technique is crucial\n\n3. Arrabbiata\n- San Marzano tomatoes\n- Fresh garlic\n- Red pepper flakes\n\nNote: Always use high-quality ingredients",
            lastEdited: "2024-10-27T14:30:00Z",
            isArchived: false
        },
        {
            id: "0a1b2c3d-4e5f-6g7h-8i9j-0k1l2m3n4o",
            title: "TypeScript Migration Guide",
            tags: ["Dev", "React", "TypeScript"],
            content: "Project migration steps:\n\n1. Initial Setup\n- Install TypeScript dependencies\n- Configure tsconfig.json\n- Set up build pipeline\n\n2. Migration Strategy\n- Start with newer modules\n- Add type definitions gradually\n- Use 'any' temporarily for complex cases\n\n3. Testing Approach\n- Update test configuration\n- Add type testing\n- Validate build process\n\nDeadline: End of Q4 2024",
            lastEdited: "2024-10-26T09:20:00Z",
            isArchived: true
        },
        {
            id: "5p4q3r2s-1t0u9v8w-7x6y5z-4a3b2c1d",
            title: "Weekly Workout Plan",
            tags: ["Fitness", "Health"],
            content: "Monday: Upper Body\n- Bench Press 4x8\n- Rows 4x10\n- Shoulder Press 3x12\n- Pull-ups 3 sets\n\nWednesday: Lower Body\n- Squats 4x8\n- Romanian Deadlifts 3x10\n- Lunges 3x12 each\n- Calf Raises 4x15\n\nFriday: Full Body\n- Deadlifts 3x5\n- Push-ups 3x12\n- Leg Press 3x12\n- Core Work\n\nCardio: Tuesday/Thursday - 30 min run",
            lastEdited: "2024-10-25T18:10:00Z",
            isArchived: false
        },
        {
            id: "b2451d3e-d1e4-4d3b-9801-4bcfc69e2a8f",
            title: "Gift Ideas",
            tags: ["Personal", "Shopping"],
            content: "Birthday and Holiday Gift List:\n\nMom:\n- Cooking class subscription\n- Kindle Paperwhite\n- Spa day package\n\nDad:\n- Golf lessons\n- Wireless earbuds\n- BBQ accessories\n\nSister:\n- Art supplies set\n- Yoga mat kit\n- Coffee subscription\n\nBudget per person: $150-200",
            lastEdited: "2024-10-20T11:30:15Z",
            isArchived: true
        },
        {
            id: "c3b2a1d0-9e8f-7g6h-5i4j-3k2l1m0n",
            title: "React Component Library",
            tags: ["Dev", "React"],
            content: "Custom Component Library Structure:\n\n1. Basic Components\n- Button\n- Input\n- Card\n- Modal\n\n2. Form Components\n- FormField\n- Select\n- Checkbox\n- RadioGroup\n\n3. Layout Components\n- Container\n- Grid\n- Flex\n\nAll components need:\n- TypeScript definitions\n- Unit tests\n- Storybook documentation\n- Accessibility support",
            lastEdited: "2024-10-15T14:23:45Z",
            isArchived: true
        },
        {
            id: "9a8b7c6d-5e4f-3g2h-1i0j-9k8l7m6n",
            title: "Meal Prep Ideas",
            tags: ["Cooking", "Health", "Recipes"],
            content: "Weekly Meal Prep Plan:\n\nBreakfast Options:\n- Overnight oats\n- Egg muffins\n- Smoothie packs\n\nLunch Containers:\n- Greek chicken bowl\n- Buddha bowls\n- Tuna pasta salad\n\nSnacks:\n- Cut vegetables\n- Mixed nuts\n- Greek yogurt parfait\n\nPrep Time: Sunday 2-4pm\nStorage: Glass containers\nLasts: 4-5 days",
            lastEdited: "2024-10-12T09:45:15Z",
            isArchived: false
        },
        {
            id: "8b7c6d5e-4f3g2h1i-0j9k8l7m",
            title: "Reading List",
            tags: ["Personal", "Dev"],
            content: "Current Reading Queue:\n\n1. Technical Books\n- Clean Architecture by Robert Martin\n- Designing Data-Intensive Applications\n- TypeScript Design Patterns\n\n2. Personal Development\n- Deep Work by Cal Newport\n- Atomic Habits\n- The Psychology of Money\n\nCurrently Reading: Clean Architecture\nNext Up: Deep Work\n\nGoal: One book per month",
            lastEdited: "2024-10-05T12:20:30Z",
            isArchived: false
        },
        {
            id: "7c6d5e4f-3g2h1i0j-9k8l7m6n",
            title: "Fitness Goals 2025",
            tags: ["Fitness", "Health", "Personal"],
            content: "2025 Fitness Objectives:\n\n1. Strength Goals\n- Bench press: 225 lbs\n- Squat: 315 lbs\n- Deadlift: 405 lbs\n\n2. Cardio Goals\n- Run half marathon\n- 5k under 25 minutes\n\n3. Habits\n- Gym 4x per week\n- Daily 10k steps\n- Sleep 7+ hours\n\nTrack all workouts in Strong app",
            lastEdited: "2024-09-22T07:30:00Z",
            isArchived: false
        }
    ],
    activeNote: null,
}

export const NotesProvider = ({children}: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(notesReducer, initialNotes);

    return (
        <NotesContext.Provider value={{notes: state.notes, activeNote: state.activeNote, dispatch}}>
            {children}
        </NotesContext.Provider>
    );
};
