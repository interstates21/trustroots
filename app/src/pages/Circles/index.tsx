import { FC } from 'react'
import CirclesPage from './CirclesPage'

// Styling
import './less/tribes.less'
import './less/tribes-grid.less'
import './less/tribe.less'
import './less/tribe-badge.less'

const Circles: FC = () => {
    return (
      <div>
        <CirclesPage user={null} onMembershipUpdated={()=>{}} />
      </div>
    )
}

export default Circles
