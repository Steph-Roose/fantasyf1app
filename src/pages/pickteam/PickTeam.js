import React, {useCallback, useEffect, useState} from 'react';
import { useCollection } from '../../hooks/useCollection';
import { useFirestore } from '../../hooks/useFirestore';
import { useAuthContext } from '../../hooks/useAuthContext';
import DriverCards from '../../components/constructs/DriverCards/DriverCards';

import styles from './PickTeam.module.css';
import GetDrivers from '../../components/functionals/GetDrivers';

function PickTeam() {
    const [selectedTeam, setSelectedTeam] = useState({userTeam: []});
    const [budget, setBudget] = useState(50);
    const [errorMsg, setErrorMsg] = useState(null);
    const [budgetMsg, setBudgetMsg] = useState(null);

    const { documents, error } = useCollection('drivers');
    const { addDocument } = useFirestore('userTeams');
    const { user } = useAuthContext();

    const getImage = () => {
        return <GetDrivers />
    }

    const handleTeam = (e) => {
        const {value, checked} = e.target;
        const {userTeam} = selectedTeam;

        if(checked && userTeam.length <= 2) {
            setSelectedTeam({userTeam: [...userTeam, value]});
        } else if (checked && userTeam.length === 3) {
            setErrorMsg("Reached maximum amount of drivers.");
            e.target.checked = false;
        } else {
            setSelectedTeam({userTeam: userTeam.filter((e) => e !== value)});
            setErrorMsg(null)
        }

        return selectedTeam.userTeam;
    };

    const handleBudget = (e, driver) => {
        const {value, checked} = e.target;

        if(checked && budget > 0) {
            setBudget(budget - driver.cost);
        } else if (!selectedTeam.userTeam.includes(value)) {
            setBudget(budget);
            e.target.checked = false;
        } else if (selectedTeam.userTeam.includes(value)) {
            setBudget(budget + driver.cost);
        }
    }

    const handleSelection = (e, driver) => {
        handleTeam(e);
        handleBudget(e, driver);
    }

    useEffect(() => {
        if(budget < 0) {
            setBudgetMsg("Insufficient funds for drivers selected.");
        } else {
            setBudgetMsg(null);
        }
    }, [budget])

    console.log(selectedTeam);

    const handleSubmit = (e) => {
        e.preventDefault();

        addDocument({
            uid: user.uid,
            selectedTeam,
            points: 0
        })
    }

    return (
        <div className={styles.bg}>
            <div className={styles.container}>
                <h2>Pick Team</h2>
                <div className={styles.options}>
                    <p>Available budget: {budget}</p>
                    {errorMsg && <p className="error">{errorMsg}</p>}
                    {budgetMsg && <p className="error">{budgetMsg}</p>}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.buttons}>
                        <button className="btn" type="submit">Save</button>
                        <button className="btn">Cancel</button>
                    </div>
                    <div>
                        {documents && documents.sort((a, b) => b.cost - a.cost).map((document) => {
                            return <DriverCards driver={document}/>
                        })}
                    </div>
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default PickTeam;