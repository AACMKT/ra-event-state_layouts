export const IconSwitch = ({ icon,  onSwitch }) => {
    return (
      <div className="header">
          <button className="header-btn material-icons" onClick = { onSwitch }
              >
              { icon }
          </button>
      </div>
    )
  }