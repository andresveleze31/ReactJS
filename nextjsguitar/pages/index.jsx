import Link from "next/link";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1 className="text-indigo-500">Hola Mundo</h1>
        <Link href="/nosotros">Nosotros</Link>
      </div>
    </Layout>
  );
}
