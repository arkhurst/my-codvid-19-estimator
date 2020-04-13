import { data } from './data';

const covid19ImpactEstimator = () => {
    
    const infected = data.reportedCases;
    // get reported cases
    (function getCurrentlyInfected(){
        infected * 10
    }(infected))
};

export default covid19ImpactEstimator;
