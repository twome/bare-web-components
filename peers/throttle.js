/* eslint-env browser */

// Return a copy of <fn> that can only run once every <period> milliseconds.
export default function throttle(fn, periodMs = 100, runOnFallingEdge){
	let fnArmed = true // The first time the input function runs, it won't be throttled
	let attemptDuringThisCooldown = false
	let cooldownActive = false

	const run = ()=>{
		fn()
		// If the input function runs asyncronously, future attempts will be throttled without having to wait for it to complete
		fnArmed = false 
		attemptDuringThisCooldown = false
		ensureTimer()
	}

	// Start a new cooldown timer if there isn't one running
	const ensureTimer = ()=>{
		if (!cooldownActive){
			setTimeout(()=>{
				if (runOnFallingEdge && attemptDuringThisCooldown){
					// One final run after the cooldown to ensure that the very latest trigger will guarantee one run.
					run()
				} else {
					fnArmed = true
				}
				cooldownActive = false
			}, periodMs)
			cooldownActive = true
		}
	}

	// Attempt to run the input function
	const throttledAttempt = ()=>{
		if (fnArmed){
			run()
		} else {
			// Remember that we tried to run the function but were throttled
			attemptDuringThisCooldown = true
		}
	}

	return throttledAttempt
}