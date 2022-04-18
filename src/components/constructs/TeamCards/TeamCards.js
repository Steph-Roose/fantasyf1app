import React from 'react';
import { useCollection } from '../../../hooks/useCollection';

import styles from '../../../pages/pickteam/PickTeam.module.css';

function TeamCards({handleTeam}) {
    const { documents, error } = useCollection('teams');

    let teams = documents;

    return (
        <form>
            {error && <p>{error}</p>}
            <ul className={styles.container}>
                {teams && teams.sort((a, b) => b.tcost - a.tcost).map((team) => (
                    <li key={team.id}>
                        <input type="checkbox" id={team.id} className={styles.input} />
                        <label className={styles.card} htmlFor={team.id}>
                            <span className={styles.name}>{team.name}</span>
                            <span className={styles.cost}>{team.tcost}M</span>
                        </label>
                    </li>
                ))}
            </ul>
        </form>
    );
}

export default TeamCards;