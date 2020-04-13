import { data } from './data';

const covid19ImpactEstimator = () => {

    const outputData = {
        data:{},
        impact:{},
        severeImpact:{},
        curentlyInfected:{}
    }

    impact.curentlyInfected;
    impact.severe;
  
    // get currently infected cases
    (function getCurrentlyInfected(){
       const curentlyInfected = data.reportedCases;
       return  curentlyInfected * 10
    }(curentlyInfected));

    // get severe impact
    (function getSevereImpact (){
        const severe  = outputData.curentlyInfected
        return severe * 50
    }(severe));

    //number after every 30 days

    return outputData;
};

export default covid19ImpactEstimator;
