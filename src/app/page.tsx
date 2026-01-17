export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Automated Content Personalization Engine</h1>
        <p className="mt-4">Упростите интеграцию и увеличьте точность персонализации для вашего интернет-магазина.</p>
        <button className="mt-6 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded">Попробовать сейчас</button>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Проблема</h2>
        <p className="mt-2">Сложность интеграции с существующими системами и недостаточная точность персонализации.</p>
        <h2 className="text-2xl font-semibold mt-6">Решение</h2>
        <p className="mt-2">Наше решение обеспечивает простую интеграцию и высокую точность персонализации контента.</p>
      </section>
    </div>
  );
}