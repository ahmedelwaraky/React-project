import React from 'react'
import './Style/AdminDash..css'
import Admin from './assets/images/admin.png'
export default function AdminDash() {
    return (
        <>
        <section>
            <div class="container-fulid">
                <div className="head">
                    <div className="div">
                        <h3 className="" href="#">Administrator</h3>
                    </div>
                    <div className="img">
                        <img src={Admin} className='w-25'/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
