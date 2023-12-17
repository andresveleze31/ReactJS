import { PrismaClient } from "@prisma/client"

export default function Home({categorias}) {
  console.log(categorias);
  return (
    <div>
      Hola
    </div>
    
  )
}

export async function getServerSideProps(){
  const prisma = new PrismaClient();
  const categorias = await prisma.categoria.findMany();
  return {
    props:{
      categorias
    }
  }
}