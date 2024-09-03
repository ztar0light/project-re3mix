# Project VOXY: CoreXY Conversion for Ender 3-Based Printers

**Project VOXY** is an open-source initiative designed to convert Ender 3-based 3D printers into CoreXY systems. This mod leverages mostly stock parts, supplemented by off-the-shelf 6mm GT2 belt systems and 3D-printable components. Inspired by the Voron 2.4, Project VOXY offers an affordable solution for serious rapid prototyping and development or printing in general.

## Features

- **CoreXY Kinematics**: Elevate your 3D printer's capabilities with CoreXY mechanics, allowing for faster and more accurate prints.
- **Belt-Driven Z-Axis**: A cost-effective, single motor system drives the Z-axis for smoother operation.
- **Integrated Enclosure**: Designed for easy customization, with option part to hold up clear tarp to act as an enclosure while being transparent and affordability, improving print quality by maintaining a stable environment.
- **Flexible Firmware Options**: Still compatible with Marlin and Klipper, which can providing advanced features like input shaping to bring out hte true potential.
- **Modular Design**: Easily upgradeable, with support for stock, V6, Volcano and Spider hotends, BLTouch, and more.

## Getting Started

### Prerequisites

- **Compatible 3D Printer**: Ender 3, Ender 3 Pro, Ender 3 V2, or similar.
- **Motherboard**: Stock/BTT SKR E3 V3 with a Pi4 B 
- **Materials Needed**: PETG/+ filament, 6mm GT2 belts, pulleys, aluminum extrusions and optional but highly recommened linear rails.

### Parts List

- **Belts & Pulleys**: Standard 6mm GT2 belts and pulleys (xflat, x teeth).
- **Printed Components**: Available in the `/STL` folder.
- **Linear Rails** (optional): Recommended for enhanced stability, particularly on the X-axis.
- **Electronics**:
  - NEMA 17 stepper motors (from stock printer).
  - Raspberry Pi (if running Klipper).
  - BLTouch (optional for automatic bed leveling).

### Assembly Instructions

1. **Disassemble**: Remove necessary components from your printer.
2. **Modify Frame**: Follow the provided instructions to reposition Z extrusions and prepare the frame for CoreXY setup.
3. **Install Belts**: Use the provided diagrams to install the GT2 belts and pulleys.
4. **Firmware Configuration**:
   - For Marlin: Use the provided configuration files and or modify to suit your need.
   - For Klipper: Set up the Raspberry Pi and flash the appropriate firmware and web interface.
5. **(Optional) Assemble Enclosure**: Optionally, create the enclosure using clear tarp or other materials and the bracket and mounts provided in `/STL`.
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

Alternatively you can also get a ticket in the [Discord server](https://discord.gg/M5gQ7JBbPh)

## License

Project VOXY is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Thanks to the Voron community for their inspiration, and to all contributors who have helped make Project VOXY a reality.
