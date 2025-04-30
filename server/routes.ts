import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for contact form
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertMessageSchema.parse(req.body);
      
      // Store the message
      const message = await storage.createMessage(validatedData);
      
      // Return success
      res.status(200).json({ 
        success: true, 
        message: "Message sent successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Error sending message:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message" 
        });
      }
    }
  });

  // API route to get skills
  app.get("/api/skills", async (req, res) => {
    try {
      const skills = await storage.getAllSkills();
      res.status(200).json({ skills });
    } catch (error) {
      console.error("Error fetching skills:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve skills" 
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
