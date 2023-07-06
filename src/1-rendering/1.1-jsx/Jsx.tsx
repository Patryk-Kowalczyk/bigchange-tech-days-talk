export const Page = () => {
  return (
    <div>
      <header>BigChange</header>
      {/* In brackets, you can use any JavaScript expression */}
      <main className={true ? 'main' : 'main-article'}>We are unstoppable</main>
    </div>
  );
};
