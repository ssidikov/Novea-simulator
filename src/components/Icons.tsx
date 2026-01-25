import Image from 'next/image';

interface IconProps {
  name: string;
  className?: string;
  width?: number;
  height?: number;
}

export function Icon({ name, className = '', width = 24, height = 24 }: IconProps) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt={name}
      width={width}
      height={height}
      className={className}
    />
  );
}

export const BriefcaseIcon = ({ className }: { className?: string }) => (
  <Icon name="briefcase" className={className} width={20} height={20} />
);

export const UsersIcon = ({ className }: { className?: string }) => (
  <Icon name="users" className={className} width={20} height={20} />
);

export const UserSingleIcon = ({ className }: { className?: string }) => (
  <Icon name="user-single" className={className} width={20} height={20} />
);

export const UserGroupIcon = ({ className }: { className?: string }) => (
  <Icon name="user-group" className={className} width={20} height={20} />
);

export const BuildingIcon = ({ className }: { className?: string }) => (
  <Icon name="building" className={className} width={20} height={20} />
);

export const HeartIcon = ({ className }: { className?: string }) => (
  <Icon name="heart" className={className} width={20} height={20} />
);

export const PersonIcon = ({ className }: { className?: string }) => (
  <Icon name="person" className={className} width={20} height={20} />
);

export const ArrowRightIcon = ({ className }: { className?: string }) => (
  <Icon name="arrow-right" className={className} width={20} height={20} />
);

export const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <Icon name="arrow-left" className={`${className}`} width={20} height={20} />
);

export const SuitcaseIcon = ({ className }: { className?: string }) => (
  <Icon name="suitcase" className={className} width={20} height={20} />
);

export const BuildingColumnsIcon = ({ className }: { className?: string }) => (
  <Icon name="building-columns" className={className} width={20} height={20} />
);

export const DocumentIcon = ({ className }: { className?: string }) => (
  <Icon name="document" className={className} width={20} height={20} />
);

export const TractorIcon = ({ className }: { className?: string }) => (
  <Icon name="tractor" className={className} width={20} height={20} />
);

export const HeartHandIcon = ({ className }: { className?: string }) => (
  <Icon name="heart-hand" className={className} width={20} height={20} />
);

export const QuestionIcon = ({ className }: { className?: string }) => (
  <Icon name="question" className={className} width={20} height={20} />
);

export const Users2Icon = ({ className }: { className?: string }) => (
  <Icon name="users-2" className={className} />
);

export const Users3Icon = ({ className }: { className?: string }) => (
  <Icon name="users-3" className={className} />
);

export const BuildingOfficeIcon = ({ className }: { className?: string }) => (
  <Icon name="building-office" className={className} />
);
