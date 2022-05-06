import React, {useState} from 'react';
import { useCollection } from '../../hooks/useCollection';

import styles from './PickTeam.module.css';
import DriverCards from '../../components/constructs/DriverCards/DriverCards';

function PickTeam() {
    const [selectedTeam, setSelectedTeam] = useState({userTeam: []});
    const [budget, setBudget] = useState(50);
    const [errorMsg, setErrorMsg] = useState(null);
    const { documents, error } = useCollection('drivers');

    const handleOnChange = (e) => {
        const {value, checked} = e.target;
        const {userTeam} = selectedTeam;

        if(checked && userTeam.length <= 2) {
            setSelectedTeam({userTeam: [...userTeam, value]});
        } else if (checked && userTeam.length === 3) {
            setErrorMsg("You can select a maximum of 3 drivers.");
            e.target.checked = false;
        } else {
            setSelectedTeam({userTeam: userTeam.filter((e) => e !== value)});
            setErrorMsg(null)
        }
    };


    console.log(selectedTeam)

    return (
        <div className={styles.bg}>
            <div className={styles.container}>
                <h2>Pick Team</h2>
                <div>
                    <p>Available budget: </p>
                    {errorMsg && <p>{errorMsg}</p>}
                    <button className="btn">Save</button>
                    <button className="btn">Cancel</button>
                </div>
                <form>
                    <ul className={styles.drivers}>
                        {documents && documents.sort((a, b) => b.cost - a.cost).map((driver) => {
                            return <DriverCards
                                key={driver.id}
                                value={driver.driverID}
                                driver={driver}
                                handleOnChange={handleOnChange}
                            />
                        })}
                    </ul>
                </form>
                {error && <p>{error}</p>}
            </div>

        </div>
    );
}

export default PickTeam;