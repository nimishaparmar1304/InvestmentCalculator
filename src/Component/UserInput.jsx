export default function UserInput(){
    return (
        <section id="user-input">
            <div className="input-group">
            <p>
                    <label htmlFor="">Initial Investment</label>
                    <input type="number" />
                </p>
                <p>
                    <label >Annual Investment</label>
                    <input  />
                </p>
                </div>

                <div className="input-group">
                <p>
                    <label >Expected Return</label>
                    <input  />
                </p>
                <p>
                    <label >Duration</label>
                    <input  />
                </p>

            </div>
        </section>
    );
}