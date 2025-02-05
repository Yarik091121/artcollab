import React from 'react';

import './index.css';

const Contacts = (): React.ReactElement => {
    return (
        <div className='contact-page-first'>
            <div className='contact-first-borders'>
                <div>
                    <div className='contact-rectangle'>
                        <div className='contact-img-1'> </div>
                    </div>
                        <div className='contact-border'>
                            <center> Крылов Михаил </center>
                            
                        </div>
                </div>
                {/* </div> */}
                <div>
                    <div className='contact-rectangle'>
                        <div className='contact-img-2'> </div>
                    </div>
                        <div className='contact-border'>
                            <center> Сергеев Ярослав </center>
                        </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Contacts;