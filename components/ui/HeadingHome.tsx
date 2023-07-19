export interface Props {
  title: string;
  subtitle: string;
  text: string;
}

export default function HeadingHome({ title, subtitle, text }: Props) {
  return (
    <div>
      <div class="container text-center">
        <h1 class="text-[44px] my-3 louis-bold text-black">{title}</h1>
        <h2 class="text-[30px]">{subtitle}</h2>
        <p class="text-[20px] louis-bold text-[#1a1b1f] opacity-60">{text}</p>
      </div>
    </div>
  );
}
