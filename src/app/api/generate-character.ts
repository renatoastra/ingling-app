import { type NextApiRequest, type NextApiResponse } from "next"
import { prisma } from "@/server/db";
import { type Character } from "@prisma/client";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
      // Check for secret to confirm this is a valid request
      if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' })
      }

      const today = new Date().toLocaleDateString("pt-BR");
      const hasCharacterForToday = await prisma.characterOfTheDay.findFirst({
        where:{
          createdAt: today,
        },
      })

      const characters = await prisma.character.findMany({
   
      })

      if(!hasCharacterForToday && characters.length){
        const randomCharacter: Character | undefined = characters[Math.floor(Math.random() * characters.length)];

        if(!randomCharacter) return res.status(404).json({message: "Character not found"})

        const create = await prisma.characterOfTheDay.create({
          data:{
            characterId: randomCharacter.id,
            createdAt: today,
          }
        })

        return res.status(200).json(create)
      }

      res.status(200).json(hasCharacterForToday)
    }