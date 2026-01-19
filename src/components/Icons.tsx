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
  <Icon name="briefcase" className={className} />
);

export const UsersIcon = ({ className }: { className?: string }) => (
  <Icon name="users" className={className} />
);

export const UserSingleIcon = ({ className }: { className?: string }) => (
  <Icon name="user-single" className={className} />
);

export const UserGroupIcon = ({ className }: { className?: string }) => (
  <Icon name="user-group" className={className} />
);

export const BuildingIcon = ({ className }: { className?: string }) => (
  <Icon name="building" className={className} />
);

export const HeartIcon = ({ className }: { className?: string }) => (
  <Icon name="heart" className={className} />
);

export const PersonIcon = ({ className }: { className?: string }) => (
  <Icon name="person" className={className} />
);

export const ArrowRightIcon = ({ className }: { className?: string }) => (
  <Icon name="arrow-right" className={className} />
);

export const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <Icon name="arrow-left" className={`${className}`} width={20} height={20} />
);

export const SuitcaseIcon = ({ className }: { className?: string }) => (
  <Icon name="suitcase" className={className} />
);

export const BuildingColumnsIcon = ({ className }: { className?: string }) => (
  <Icon name="building-columns" className={className} />
);

export const DocumentIcon = ({ className }: { className?: string }) => (
  <Icon name="document" className={className} />
);

export const TractorIcon = ({ className }: { className?: string }) => (
  <Icon name="tractor" className={className} />
);

export const HeartHandIcon = ({ className }: { className?: string }) => (
  <Icon name="heart-hand" className={className} />
);

export const QuestionIcon = ({ className }: { className?: string }) => (
  <Icon name="question" className={className} />
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
