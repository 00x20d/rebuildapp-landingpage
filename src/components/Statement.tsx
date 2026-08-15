import Reveal from "./Reveal";

export default function Statement() {
  return (
    <section className='py-20 sm:py-16 px-6'>
      <div className='mx-auto max-w-3xl text-center'>
        <Reveal>
          <h2 className='font-display font-semibold text-[28px] sm:text-[36px] lg:text-[44px] tracking-tight text-text-primary leading-tight'>
            Finally scroll on purpose.
          </h2>

          <p className='mt-5 text-[18px] sm:text-[20px] lg:text-[22px] leading-relaxed text-text-secondary'>
            Rebuild blocks the apps that eat your day by default. Solve a short
            brain challenge, earn screen time coins, and spend them on the time
            you actually want, not the time an algorithm picked for you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
