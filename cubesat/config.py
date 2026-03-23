# ──────────────────────────────────────────────
# CubeSat Mission Configuration
# ──────────────────────────────────────────────

SATELLITE_NAME = "28ZENITH"
MISSION_ID = "ZX-2026-002"
ORBIT_ALTITUDE_KM = 550

# ── Power Subsystem ──────────────────────────
BATTERY_MAX = 100.0
BATTERY_MIN = 0.0
BATTERY_CAPACITY_WH = 20.0          # Watt-hours

POWER_LOW_THRESHOLD = 20.0          # % → triggers LOW_BATTERY fault
POWER_CRITICAL_THRESHOLD = 10.0     # % → emergency shutdown
POWER_RECOVER_THRESHOLD = 40.0      # % → fault resolved

SOLAR_CHARGE_RATE = 1.8             # % per step (in sunlight)
PAYLOAD_DRAIN_RATE = 2.0            # % per step (payload ON)
IDLE_DRAIN_RATE = 0.4               # % per step (idle)

# ── Thermal Subsystem ────────────────────────
TEMP_MAX = 80.0
TEMP_MIN = -20.0
TEMP_FAULT_HIGH = 50.0              # °C → HIGH_TEMP fault
TEMP_FAULT_LOW  = -15.0             # °C → LOW_TEMP fault
TEMP_RECOVER_HIGH = 40.0            # °C → fault resolved
TEMP_RECOVER_LOW  = -5.0            # °C → fault resolved
TEMP_SPACE_AMBIENT = -10.0          # °C passive sink target
TEMP_SUNLIGHT_GAIN  = 2.0           # °C per step (sunlight)
TEMP_SHADOW_LOSS    = 1.5           # °C per step (eclipse)
TEMP_PAYLOAD_GAIN   = 1.5           # °C per step (payload on)

# ── Communications ────────────────────────────
COMMS_LINK_MARGIN_DB = 8.5
COMMS_FREQUENCY_MHZ  = 437.1

# ── Orbit ────────────────────────────────────
ORBIT_PERIOD_STEPS   = 48            # steps per full orbit
SUNLIGHT_FRACTION    = 0.65          # 65% of orbit in sunlight

# ── Simulation ───────────────────────────────
TIME_STEP_MIN = 1                    # minutes per step
