import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const faqs = [
    {
      question: "What is XAUUSD?",
      answer:
        "XAUUSD is the financial symbol for gold priced in US dollars. It's one of the most traded and liquid markets globally, known for its relative stability and predictable patterns, making it ideal for algorithmic trading.",
    },
    {
      question: "How do I start investing?",
      answer:
        "Getting started is simple: create an account, verify your identity, deposit funds (minimum $100), and our trading robot automatically begins working for you, generating your 1% daily returns.",
    },
    {
      question: "Is the 1% daily return guaranteed?",
      answer:
        "We offer a fixed 1% daily return based on our trading algorithm's consistent performance. While all investments carry some risk, our robot is designed to deliver reliable returns through various market conditions.",
    },
    {
      question: "When can I withdraw my money?",
      answer:
        "You can withdraw your funds at any time without penalties or lock-in periods. Most withdrawal requests are processed the same day, with a maximum processing time of 24 hours.",
    },
    {
      question: "Is my capital secure?",
      answer:
        "We prioritize security with bank-grade encryption, segregated accounts, and comprehensive risk management protocols. While all trading involves some risk, our primary focus is capital preservation alongside steady returns.",
    },
    {
      question: "What are the fees?",
      answer:
        "We don't charge any deposit or withdrawal fees. Our service is compensated by retaining a small percentage of the trading profits above the fixed 1% daily return delivered to investors.",
    },
    {
      question: "How does the trading robot work?",
      answer:
        "Our proprietary trading robot uses advanced algorithms and machine learning to analyze market patterns and execute XAUUSD trades 24/7. It's designed to capitalize on gold market inefficiencies while managing risk to deliver consistent returns.",
    },
    {
      question: "Is there a minimum investment amount?",
      answer:
        "Yes, the minimum investment is $500. This allows us to properly diversify and execute our trading strategy while generating meaningful returns for our investors.",
    },
  ];

  return (
    <Box id="faq" sx={{ bgcolor: "#121212", py: 10, color: "white" }}>
      <Container maxWidth="md">
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Frequently Asked Questions
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
            Find answers to common questions about our gold trading robot and investment process
          </Typography>
        </Box>

        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 2,
              bgcolor: "#1f1f1f",
              color: "white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              borderRadius: "10px",
              overflow: "hidden",
              "&::before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#FFD700" }} />}
              aria-controls={`faq-content-${index}`}
              id={`faq-header-${index}`}
              sx={{
                px: 3,
                py: 2,
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "#2a2a2a",
                },
              }}
            >
              {faq.question}
            </AccordionSummary>
            <AccordionDetails sx={{ px: 3, py: 2, color: "rgba(255,255,255,0.8)" }}>
              {faq.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FAQ;
