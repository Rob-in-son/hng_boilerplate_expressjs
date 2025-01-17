import AppDataSource from "../data-source";
import { FAQ } from "../models/faq";
import { Repository } from "typeorm";
import { BadRequest, ResourceNotFound, Unauthorized } from "../middleware";

type FAQType = {
  question: string;
  answer: string;
  category: string;
  createdBy: string;
};

class FAQService {
  private faqRepository: Repository<FAQ>;
  constructor() {
    this.faqRepository = AppDataSource.getRepository(FAQ);
  }
  public async createFaq(data: FAQType): Promise<FAQ> {
    try {
      const faq = this.faqRepository.create(data);
      const createdFAQ = await this.faqRepository.save(faq);
      return createdFAQ;
    } catch (error) {
      throw new Error("Failed to create FAQ");
    }
  }

  public async updateFaq(payload: Partial<FAQ>, faqId: string) {
    const faq = await this.faqRepository.findOne({ where: { id: faqId } });

    if (!faq) {
      throw new BadRequest(`Invalid request data`);
    }

    Object.assign(faq, payload);

    try {
      await this.faqRepository.update(faqId, payload);
      const updatedFaq = await this.faqRepository.findOne({
        where: { id: faqId },
      });
      return updatedFaq;
    } catch (error) {
      throw error;
    }
  }
<<<<<<< HEAD
=======

  public async getAllFaqs(): Promise<FAQ[]> {
    try {
      const faqs = await this.faqRepository.find();
      return faqs;
    } catch (error) {
      throw new Error("Failed to fetch FAQs");
    }
  }
>>>>>>> 78e02e38ee685830aa91acb2e343579bc4d1fd45
}

export { FAQService };
