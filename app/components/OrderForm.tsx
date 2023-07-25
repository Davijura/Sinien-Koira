import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import OrderWood from './OrderWood';
import OrderInfo from './OrderInfo';
import Checkbox from './Checkbox';
import { useOrderForm } from '../hooks/useOrderForm';
import FormRadio from './FormRadio';

export default function OrderForm() {
  const {
    
    isFormSubmitted, setFormSubmitted, isAgreementChecked, setAgreementChecked, form,
    total, prices, quantities, setQuantities, personalData, setPersonalData,
    handlePersonalDataChange, handleAgreementChange, handleChange, resetForm
  } = useOrderForm();

  const [isDeliverySelected, setIsDeliverySelected] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!isAgreementChecked) {
      setFormSubmitted(true);
      return;
    }

    if (form.current) {
      const templateParams = {
        total: total.toString(),
        ...personalData,
        ...quantities,
      };

      emailjs.send('service_1rbe336', 'template_1h6g1q2', {...templateParams, isDeliverySelected}, 'yeWCwgC2fF2o2kGVV')
        .then((result) => {
          console.log(result.text);
          setFormSubmitted(true)
          resetForm();
        }, (error) => {
          console.log(error.text);
        });

    }

  };

  const variants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex justify-center">
      <form ref={form} onSubmit={sendEmail} className="mx-auto w-[850px] bg-gray-200 shadow-xl rounded-xl px-8 pt-10 pb-8 mb-4">

        <OrderWood prices={prices} quantities={quantities} onChange={handleChange} />

        <div className="divider "></div>

        <div>
          <p className='text-black font-bold'>Celková cena: {total} Kč </p>
        </div>

        <div className="divider"></div>

        <FormRadio setIsDeliverySelected={setIsDeliverySelected} />

        <h2 className="block text-black text-lg font-bold mb-4 mt-4">Osobní informace</h2>

        <OrderInfo personalData={personalData} onChange={handlePersonalDataChange} />

        <Checkbox isChecked={isAgreementChecked} onChange={handleAgreementChange} />

      </form>
      {isFormSubmitted && (
        <motion.div
          className="toast toast-end"
          variants={variants}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          <div className="alert bg-green-500 alert-success gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className='text-white'>Objednávka úspěšně odeslána.</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};