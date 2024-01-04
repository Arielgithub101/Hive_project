export default function AddressInputs({addressProps,setAddressProp,disabled=false}) {
  const {phone, streetAddress, postalCode, city, country} = addressProps;
  return (
    <>
      <label>טלפון</label>
      <input
        disabled={disabled}
        type="tel" placeholder="Phone number"
        value={phone || ''} onChange={ev => setAddressProp('phone', ev.target.value)} />
      <label>כתובת רחוב</label>
      <input
        disabled={disabled}
        type="text" placeholder="Street address"
        value={streetAddress || ''} onChange={ev => setAddressProp('streetAddress', ev.target.value)}
      />
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label>מיקוד</label>
          <input
            disabled={disabled}
            type="text" placeholder="Postal code"
            value={postalCode || ''} onChange={ev => setAddressProp('postalCode', ev.target.value)}
          />
        </div>
        <div>
          <label>עיר</label>
          <input
            disabled={disabled}
            type="text" placeholder="City"
            value={city || ''} onChange={ev => setAddressProp('city', ev.target.value)}
          />
        </div>
      </div>
      <label>מדינה</label>
      <input
        disabled={disabled}
        type="text" placeholder="Country"
        value={country || ''} onChange={ev => setAddressProp('country', ev.target.value)}
      />
    </>
  );
}