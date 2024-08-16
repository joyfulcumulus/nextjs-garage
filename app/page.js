import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex">
      <div>
        <h1>Keep your ride in perfect shape with Garage Gaudin - where precision meets passion.</h1>
        <h2>From meticulous inspections to top-tier repairs, we combine advanced technology with a passion for automotive excellence. Every ride is as smooth as the day you bought it.</h2>
        <p>Login button here</p>
      </div>

      <div>
        <Image
          src="https://images.unsplash.com/photo-1643700973089-baa86a1ab9ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={375}
          height={559}
          className=""
          alt="Image of Garage Gaudin (Credits: Unsplash)"
        />
      </div>
    </div>
  );
}
