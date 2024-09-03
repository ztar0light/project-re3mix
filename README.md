# Project VOXY: CoreXY Conversion for Ender 3-Based Printers

**Project VOXY** is an open-source initiative designed to convert Ender 3-based 3D printers into CoreXY systems. This mod leverages mostly stock parts, supplemented by off-the-shelf 6mm GT2 belt systems and 3D-printable components. Inspired by the Voron 2.4, Project VOXY offers an affordable solution for serious rapid prototyping and development.

## Features

- **CoreXY Kinematics**: Elevate your 3D printer's capabilities with CoreXY mechanics, allowing for faster and more accurate prints.
- **Belt-Driven Z-Axis**: A cost-effective, single motor system drives the Z-axis for smoother operation.
- **Integrated Enclosure**: Designed for easy customization, with clear tarp options for affordability, improving print quality by maintaining a stable environment.
- **Flexible Firmware Options**: Compatible with both Marlin and Klipper, providing advanced features like input shaping.
- **Modular Design**: Easily upgradeable, with support for high-temp hotends, BLTouch, dual Z-axis, and more.

## Getting Started

### Prerequisites

- **Compatible 3D Printer**: Ender 3, Ender 3 Pro, Ender 3 V2, or similar.
- **Firmware**: Marlin or Klipper.
- **Materials Needed**: PETG filament, 6mm GT2 belts, pulleys, and optional linear rails.

### Parts List

- **Belts & Pulleys**: Standard 6mm GT2 belts and pulleys.
- **Printed Components**: Available in the `/STL` folder.
- **Linear Rails** (optional): Recommended for enhanced stability, particularly on the X-axis.
- **Electronics**:
  - NEMA 17 stepper motors (stock).
  - Raspberry Pi (if running Klipper).
  - BLTouch (optional for automatic bed leveling).

### Assembly Instructions

1. **Disassemble**: Remove necessary components from your printer.
2. **Modify Frame**: Follow the provided instructions to reposition Z extrusions and prepare the frame for CoreXY setup.
3. **Install Belts**: Use the provided diagrams to install the GT2 belts and pulleys.
4. **Firmware Configuration**:
   - For Marlin: Use the provided configuration files.
   - For Klipper: Set up the Raspberry Pi and flash the appropriate firmware.
5. **Assemble Enclosure**: Optionally, create the enclosure using clear tarp or other materials.

## Usage

After completing the conversion, your printer will operate as a CoreXY system. For optimal performance:
- **Level the bed** using a BLTouch or manual mesh leveling.
- **Tune print settings**: Adjust print speeds, acceleration, and input shaping if using Klipper.

## Contributing

We welcome contributions from the community! If you have ideas for improvement or new features, please follow these steps:

1. Fork this repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Submit a pull request for review.

## License

Project VOXY is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Thanks to the Voron community for their inspiration, and to all contributors who have helped make Project VOXY a reality.
