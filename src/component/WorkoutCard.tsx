interface Props {
  exercise: { name: string; value: number };
}
export default function WorkoutCard({ exercise }: Props) {
  return (
    <div
      key={exercise.name}
      className="flex flex-col items-center p-2 sm:p-4 bg-secondary rounded-lg"
    >
      <h3 className="text-sm sm:text-lg font-semibold text-center">
        {exercise.name}
      </h3>
      <p className="text-lg sm:text-2xl font-bold">{exercise.value} kg</p>
    </div>
  );
}
