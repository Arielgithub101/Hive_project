import FlyingButton from 'react-flying-item'

export default function AddToCartButton({
  hasSizesOrExtras, onClick, basePrice, image
}) {
  if (!hasSizesOrExtras) {
    return (
      <div className="flying-button-parent mt-4">
        <FlyingButton
          targetTop={'5%'}
          targetLeft={'95%'}
          src={image}>
          <div className='text-black' onClick={onClick}>
            הוסף לעגלה ${basePrice}
          </div>
        </FlyingButton>
      </div>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 bg-primary text-black rounded-full px-8 py-2"
    >
      <span>הוסף לעגלה (מ ${basePrice})</span>
    </button>
  );
}