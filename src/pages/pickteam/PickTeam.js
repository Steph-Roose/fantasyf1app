import React from 'react';
import { useCollection } from '../../hooks/useCollection';

import styles from './PickTeam.module.css';
import DriverCards from '../../components/constructs/DriverCards/DriverCards';

function PickTeam() {
    const { documents, error } = useCollection('drivers');



    return (
        <div className={styles.bg}>
            <div className={styles.container}>
                <h2>Pick Team</h2>
                <div>
                    <p>Available budget: </p>
                    <button className="btn">Save</button>
                    <button className="btn">Cancel</button>
                </div>
                <form>
                    <ul className={styles.drivers}>
                        {documents && documents.sort((a, b) => b.cost - a.cost).map((driver) => {
                            return <DriverCards driver={driver} />
                        })}
                    </ul>
                </form>
                {error && <p>{error}</p>}
            </div>

        </div>
    );
}

export default PickTeam;