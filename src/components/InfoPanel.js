import React from "react";

export default function InfoPanel(){
    return (
        <section id="info-panel">
            <label>Gender</label>
            <select name="gender" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <label>Are you adult?</label>
            <input type="checkbox"/>
            <p>This app is designed for adults, so if you are not adult we suggest you to use other tools</p>
        </section>
    )
}