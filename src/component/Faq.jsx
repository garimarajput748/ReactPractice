import { useState } from "react";

const Faq = () => {
    const [selectedFaq, setSelectedFaq] = useState('');

    const Faqs = [
        {
            Question: 'what is faq?',
            Answer: 'Lorem ipsum faq',
        },
        {
            Question: 'what is react?',
            Answer: 'Lorem ipsum react',
        },
        {
            Question: 'what is hook?',
            Answer: 'Lorem ipsum hook',
        }
]

    return(
        <>
        {Faqs.map((faq,index) => ( 
        
        <div className="panel">
            <button key={index} className="accordion" onClick={ () => setSelectedFaq(index) }>{faq.Question} </button>
            {selectedFaq === index && (
                        <div className="panel">
                            <p>{faq.Answer}</p>
                        </div>
                    )}
            </div>)
            )}
            
            
        </>
    );
}
 export default Faq;