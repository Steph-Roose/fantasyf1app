import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { timestamp } from '../../config/configfirebase';

// hooks
import { useCollection } from '../../hooks/Firestore/useCollection';
import { useFirestore } from '../../hooks/Firestore/useFirestore';
import { useDocument } from '../../hooks/Firestore/useDocument';
import { useAuthContext } from '../../hooks/authentification/useAuthContext';

// components
import DriverCards from '../../components/constructs/DriverCards/DriverCards';

// styles and images
import styles from './PickTeam.module.css';

function PickTeam() {
    const [selectedTeam, setSelectedTeam] = useState({team: []});
    const [budget, setBudget] = useState(42);
    const [errorMsg, setErrorMsg] = useState(null);
    const [budgetMsg, setBudgetMsg] = useState(null);
    const [savedMsg, setSavedMsg] = useState(null);

    const { user } = useAuthContext();
    const { documents, error } = useCollection('drivers');
    const { document } = useDocument('users', user.uid);
    const { updateDocument, response } = useFirestore('users');

    const history = useHistory();

    const handleTeam = (e) => {
        const { value, checked } = e.target;
        const { team } = selectedTeam;

        if(checked && team.length <= 2) {
            setSelectedTeam({team: [...team, value]});
        } else if (checked && team.length === 3) {
            setErrorMsg("Reached maximum amount of drivers.");
            e.target.checked = false;
        } else {
            setSelectedTeam({team: team.filter((e) => e !== value)});
            setErrorMsg(null)
        }

        return selectedTeam.team;
    };

    const handleBudget = (e, driver) => {
        const {value, checked} = e.target;

        if(checked && budget > 0) {
            setBudget(budget - driver.cost);
        } else if (!selectedTeam.team.includes(value)) {
            setBudget(budget);
            e.target.checked = false;
        } else if (selectedTeam.team.includes(value)) {
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const chosenTeam = selectedTeam.team;
        const choseTeamAt = timestamp.fromDate(new Date());

        updateDocument(document.id, {
            choseTeamAt,
            userTeam: chosenTeam
        })

        setTimeout(() => {
            history.push("/");
        }, 1500)
    }

    return (
        <div className="backgroundtwo">Hie
            <div className="container">
                <h2 className={styles.title}>Pick Team</h2>
                {document && document.userTeam && <p className="confirmation">Team saved. Check the home-page for your team.</p>}
                {document && !document.userTeam &&
                    <>
                        <div className={styles.options}>
                            <p>Pick three drivers</p>
                            <p><span>Available budget: </span>{budget}</p>
                            {errorMsg && <p className="error">{errorMsg}</p>}
                            {budgetMsg && <p className="error">{budgetMsg}</p>}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.buttons}>
                                {!savedMsg && <button className="btn" type="submit">Save</button>}
                                {savedMsg && <button className="btn" disabled>Save</button>}
                            </div>
                            <ul className="cards">
                                {documents && documents.sort((a, b) => b.cost - a.cost).map((driver) => {
                                    return (
                                        <DriverCards
                                            key={driver.id}
                                            value={driver.driverID}
                                            driver={driver}
                                            handleSelection={(e) => handleSelection(e, driver)}
                                        />
                                    )
                                })}
                            </ul>
                        </form>
                    </>
                }
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default PickTeam;