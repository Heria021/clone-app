import { DropdownMenu } from './types';

export const dropdownMenus: DropdownMenu[] = [
    {
      label: 'Data Center Infrastructure Management',
      items: [
        { label: 'Monitoring Devices', href: '/dc-management/monitoring' },
        { label: 'Asset Tracking', href: '/dc-management/asset-management' },
        { label: 'Network Management', href: '/dc-management/networking' },
        { label: 'Change Managmeent', href: '/dc-management/change-management' },
        { label: 'Colocation Management', href: '/dc-management/colocation' },
        { label: 'Data Center Planner', href: '/dc-management/dc-planner' },
        { label: 'Firmware Management', href: '/dc-management/firmware' },
        { label: 'IP Address Management', href: '/dc-management/ipam' },
        { label: 'Customer Portal', href: '/dc-management/customer-portal' },
        { label: 'Custom Insights', href: '/dc-management/insights' },
        { label: 'Custom Data Center Solutions', href: '/dc-management/custom-solutions' },
      ],
    },
    {
      label: 'Intelligence Solutions',
      items: [
        { label: 'Digital Twins', href: '/intelligence/digital-twins' },
        { label: 'Smart Power Mapping', href: '/intelligence/power-mapping' },
        { label: 'Predictive Failure and Alerting', href: '/intelligence/predictive-failure' },
        { label: 'Smart Control Systems', href: '/intelligence/control-systems' },
        { label: 'Automated Discovery', href: '/intelligence/discovery' },
      ],
    },
    {
      label: 'Data Center Compliance',
      items: [
        { label: 'DCOI Compliance', href: '/compliance/dcoi' },
        { label: '(EU) 2023/1791', href: '/compliance/eu-2023-1791' },
        { label: 'EN 50600', href: '/compliance/en-50600' },
        { label: 'LEED Certification', href: '/compliance/leed' },
        { label: 'ISO/IEC 30134-2', href: '/compliance/iso-iec-30134-2' },
        { label: '(EPA) ENERGY STAR', href: '/compliance/energy-star' },
        { label: 'European Commission Joint Research Centre (JRC)', href: '/compliance/ec-jrc' },
      ],
    },
    {
      label: 'Sustainability Blog',
      items: [
        { label: 'Energy Efficiency', href: '/energy-solutions/pue-tracking' },
        { label: 'Stranded Energy Map', href: '/energy-solutions/energy-map' },
        { label: 'Environmental Product Declaration', href: '/energy-solutions/environmental-product-declaration' },
        { label: 'Renewables Integration', href: '/energy-solutions/renewables-integration' },
        { label: 'Power Resource Management', href: '/energy-solutions/power-resource-managment' },
      ],
    },
  ];
