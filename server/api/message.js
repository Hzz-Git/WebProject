import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ 
          error: 'All fields are required' 
        });
      }

      const savedMessage = await prisma.message.create({
        data: {
          name,
          email,
          message
        }
      });

      return res.status(200).json(savedMessage);
    } catch (error) {
      console.error('Error saving message:', error);
      return res.status(500).json({ 
        error: 'Failed to save message' 
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}