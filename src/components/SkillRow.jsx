const SkillRow = ({ name, level }) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2 text-sm sm:text-base">
      <span className="font-medium text-gray-700 dark:text-gray-300">
        {name}
      </span>
      <span
        className={`text-sm font-semibold ${
          level === "Básico"
            ? "text-gray-500 dark:text-gray-500"
            : "text-primary-600 dark:text-primary-400"
        }`}
      >
        {level}
      </span>
    </div>
  );
};

export default SkillRow;
