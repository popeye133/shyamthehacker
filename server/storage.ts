import { users, type User, type InsertUser, type InsertMessage, type Message, messages, skills, type Skill, type InsertSkill } from "@shared/schema";

// Storage interface
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact message methods
  createMessage(message: InsertMessage): Promise<Message>;
  getAllMessages(): Promise<Message[]>;
  
  // Skills methods
  createSkill(skill: InsertSkill): Promise<Skill>;
  getAllSkills(): Promise<Skill[]>;
  getSkillsByCategory(category: string): Promise<Skill[]>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private messages: Map<number, Message>;
  private skills: Map<number, Skill>;
  private userId: number;
  private messageId: number;
  private skillId: number;

  constructor() {
    this.users = new Map();
    this.messages = new Map();
    this.skills = new Map();
    this.userId = 1;
    this.messageId = 1;
    this.skillId = 1;
    
    // Initialize with some skills data
    this.initializeSkills();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact message methods
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.messageId++;
    const now = new Date();
    const message: Message = { 
      ...insertMessage, 
      id, 
      created_at: now 
    };
    this.messages.set(id, message);
    return message;
  }
  
  async getAllMessages(): Promise<Message[]> {
    return Array.from(this.messages.values());
  }
  
  // Skills methods
  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const id = this.skillId++;
    const skill: Skill = { ...insertSkill, id };
    this.skills.set(id, skill);
    return skill;
  }
  
  async getAllSkills(): Promise<Skill[]> {
    return Array.from(this.skills.values());
  }
  
  async getSkillsByCategory(category: string): Promise<Skill[]> {
    return Array.from(this.skills.values()).filter(
      (skill) => skill.category === category
    );
  }
  
  // Initialize with default skills data
  private async initializeSkills() {
    // Hacking & Security skills
    await this.createSkill({ name: "Penetration Testing", category: "security", level: 95 });
    await this.createSkill({ name: "Network Security", category: "security", level: 85 });
    await this.createSkill({ name: "Web Application Security", category: "security", level: 90 });
    await this.createSkill({ name: "Vulnerability Assessment", category: "security", level: 88 });
    await this.createSkill({ name: "Social Engineering", category: "security", level: 80 });
    
    // Programming skills
    await this.createSkill({ name: "Python", category: "programming", level: 95 });
    await this.createSkill({ name: "C/C++", category: "programming", level: 85 });
    await this.createSkill({ name: "Bash Scripting", category: "programming", level: 90 });
    await this.createSkill({ name: "Web Development", category: "programming", level: 75 });
    await this.createSkill({ name: "AI/ML", category: "programming", level: 70 });
    
    // Testing & QA skills
    await this.createSkill({ name: "Software Testing", category: "testing", level: 92 });
    await this.createSkill({ name: "Mobile App Testing", category: "testing", level: 88 });
    await this.createSkill({ name: "Quality Assurance", category: "testing", level: 85 });
    await this.createSkill({ name: "Automated Testing", category: "testing", level: 80 });
    await this.createSkill({ name: "Security Testing", category: "testing", level: 94 });
  }
}

// Export storage instance
export const storage = new MemStorage();
