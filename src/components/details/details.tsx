import styles from "./details.module.css";

function Details() {
    return (
        <>
        <div className={styles.containerFluid}>
            <div className={styles.containerFluid2}>               
                <div className={styles.child1}>
                    <div className={styles.det}>
                        Here's your journey details
                    </div>                 
                </div>
                <div className={styles.child2}>
                    <div className={styles.subChild}>
                        <div className={styles.distance}>
                            <div className={styles.dis1}>
                                <div className={styles.km}>
                                    <h1>68<span>km</span></h1>
                                </div>                              
                            </div>
                            <div className={styles.dis2}>
                                <h5>in distance</h5>
                            </div>
                        </div>
                    </div>
                    <div className={styles.subChild}>
                        <div className={styles.distance}>
                            <div className={styles.dis1}>
                                <div className={styles.km}>
                                    <h1>7.5<span>h</span></h1>
                                </div>
                            </div>
                            <div className={styles.dis2}>
                                <h5>journey through the<br/>mountains</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        </>
    );
}

export default Details;