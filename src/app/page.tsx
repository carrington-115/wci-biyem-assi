import TopPageComponent from "@/components/TopPageComponent";

export default function Home() {
  return (
    <main>
      <TopPageComponent
        image="/images/image-1.png"
        children={<h1>This is the home page component</h1>}
      />
      <h2>Hello home page</h2>
    </main>
  );
}
