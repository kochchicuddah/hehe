import styles from "./ad.module.css"

function Ad() {
    return (
        <>
            <div className={styles.containerFluid}>
                <div className={styles.content}> 
                    <img
                        src="phone.jpg"
                        alt="..."
                        style={{
                            position: 'absolute',
                            top: '0%',
                            left: '7.5%',
                            width: '85%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: -1,
                            borderRadius: '20px',
                            filter: 'blur(10px)'
                        }}
                    />                   
                    <div className={styles.child1}>
                        <h3>Download the app for the best experience</h3> 
                    </div>
                    <div className={styles.child2}>
                        <img src="phone.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ad;