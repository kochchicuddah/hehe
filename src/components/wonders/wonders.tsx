import styles from "./wonders.module.css";

function Wonders() {
    return (
        <>
            <div className={styles.containerFluid}>
                <div className={styles.containerFluid2}>
                <div className={styles.title}>
                    Wonders alongside your journey
                </div>
                <div className={styles.content}>
                    <div className={styles.row1}>
                        <div className={styles.parent1}>
                            <img className={styles.image} 
                            src="/public/img1.jpg" alt="" />
                        </div>
                        <div className={styles.parent2}>
                            <div className={styles.child1}>
                                <img className={styles.image} 
                                src="/public/img4.jpg" alt="" />
                            </div>
                            <div className={styles.child2}>
                                <img className={styles.image} 
                                src="/public/1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.row2}>
                        <div className={styles.p1}>
                            <img className={styles.image} 
                            src="/public/2.jpg" alt="" />
                        </div>
                        <div className={styles.p2}>
                            <div className={styles.c1}>
                                <img className={styles.image} 
                                src="/public/3.jpg" alt="" />
                            </div>
                            <div className={styles.c2}>
                                <img className={styles.image} 
                                src="/public/4.jpg" alt="" />
                            </div>
                        </div>
                    </div>                   
                </div>
                <div className={styles.seeMore}>
                    See More
                </div>
                </div>
            </div>
        </>
    );
}

export default Wonders;