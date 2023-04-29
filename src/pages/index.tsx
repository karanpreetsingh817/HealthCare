import { useState } from 'react';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (<div>Landing Page</div>
  );
};

export default RegistrationForm;
