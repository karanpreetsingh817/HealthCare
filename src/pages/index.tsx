import { useState } from 'react';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/3 bg-white">
        <nav>
          <ul>
            <li className={step === 1 ? 'active' : ''}>
              <a href="#" onClick={() => setStep(1)}>Step 1</a>
            </li>
            <li className={step === 2 ? 'active' : ''}>
              <a href="#" onClick={() => setStep(2)}>Step 2</a>
            </li>
            <li className={step === 3 ? 'active' : ''}>
              <a href="#" onClick={() => setStep(3)}>Step 3</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 bg-white">
        <div className="w-2/5 mx-auto p-8">
          {step === 1 && (
            <form>
              <h2 className="mb-8 text-xl font-bold">Step 1</h2>
              {/* form fields for step 1 */}
              <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
            </form>
          )}
          {step === 2 && (
            <form>
              <h2 className="mb-8 text-xl font-bold">Step 2</h2>
              {/* form fields for step 2 */}
              <div className="flex justify-between">
                <button type="button" className="btn btn-secondary" onClick={prevStep}>Back</button>
                <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
              </div>
            </form>
          )}
          {step === 3 && (
            <form>
              <h2 className="mb-8 text-xl font-bold">Step 3</h2>
              {/* form fields for step 3 */}
              <div className="flex justify-between">
                <button type="button" className="btn btn-secondary" onClick={prevStep}>Back</button>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
