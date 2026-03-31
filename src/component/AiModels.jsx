import { use } from "react";
import AiModelCard from "./AiModelCard";

const AiModels = ({ modelPromise, carts, setCarts }) => {
  const models = use(modelPromise);

  return (
    <div className="p-20 max-w-7xl mx-auto">
      <div className="text-center space-y-3.5">
        <h2 className="font-bold text-5xl ">Choose Your AI Model</h2>
        <p>One Subscription gives you access to all frontier ai models</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {models.map((model, index) => (
          <div key={index}>
            <AiModelCard model={model} carts={carts} setCarts={setCarts}></AiModelCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiModels;
