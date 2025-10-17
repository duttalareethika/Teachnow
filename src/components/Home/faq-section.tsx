import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "In which cities can I hire via Teachnow?",
    answer:
      "Curabitur molestsuada ipsum in magna pellentesque, sed tincidunt metus ornare. Nullam sagittis neque sit amet ipsum aliquet, eget interdum libero rutrum. In vitae ultrices dolor. Sed ac faucibus nibh, vitae convallis turpis. In aliquet ligula eu sem sagittis suscipit. Fusce vitae pulvinar nunc, non accumsan massa. Ut varius est sed nisl molestie, ac interdum quam ultrices. Pellentesque porttitor mauris sagittis, tempor arcu id, fermentum mauris. Phasellus ante tortor, viverra id lacus vitae, rutrum hendrerit leo.",
  },
  {
    question: "Does Teachnow offers EMI options?",
    answer:
      "Yes, we offer flexible EMI options for all our pricing plans to make it easier for you to manage your hiring budget.",
  },
  {
    question: "Is job validity different than credits validity?",
    answer:
      "Job validity refers to how long your posted job remains active, while credits validity is the timeframe within which you must use your purchased credits.",
  },
  {
    question: "Do I get GST invoice for my purchase?",
    answer: "Yes, we provide GST invoices for all purchases as per Indian tax regulations.",
  },
  {
    question: "What type of payments do you accept?",
    answer:
      "We accept all major payment methods including credit cards, debit cards, net banking, UPI, and digital wallets.",
  },
]

export function FAQSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1e2d42] mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-[#dae9ff] rounded-lg px-6 border-none">
              <AccordionTrigger className="text-left text-[#1e2d42] font-medium hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#505050] pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
