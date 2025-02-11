import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';
import SectionHeading from '../SectionHeading';

function FaqSection({ data }) {
  return (
    <div className="col-lg-8 col-11 mx-auto">
      <SectionHeading
        SectionSubtitle="Questions"
        SectionTitle="FAQ'S"
        variant={'text-center'}
      />
      <Accordion
        className="container p-0 mt-5 "
        style={{ border: '2px solid #f97d82', borderRadius: '2rem' }}
      >
        {data.map((item) => (
          <AccordionItem eventKey={item.id} key={item.id}>
            <AccordionHeader className="questionbox">
              {item.question}
            </AccordionHeader>
            <AccordionBody className="answerbox">{item.answer}</AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FaqSection;
