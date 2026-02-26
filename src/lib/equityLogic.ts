export const TOTAL_WAR_CHEST_TARGET = 45000000;
export const PROJECTED_ROI_YTD = 0.182;
export const DEFAULT_MEMBER_COMMITMENT = 10000;

export function calculateMemberEquity(
    annualCommitment: number = DEFAULT_MEMBER_COMMITMENT,
    totalWarChest: number = TOTAL_WAR_CHEST_TARGET
): number {
    if (totalWarChest === 0) return 0;
    return (annualCommitment / totalWarChest) * 100;
}

export function calculateProjectedPayout(
    annualCommitment: number = DEFAULT_MEMBER_COMMITMENT,
    roi: number = PROJECTED_ROI_YTD
): number {
    return annualCommitment + (annualCommitment * roi);
}

export function calculateVotingWeight(
    annualCommitment: number,
    totalContributions: number
): number {
    if (totalContributions === 0) return 1;
    return Math.max(1, Math.floor((annualCommitment / totalContributions) * 100));
}

export interface MemberProfile {
    name: string;
    role: string;
    avatarUrl: string;
    annualCommitment: number;
}

export const DUMMY_MEMBER: MemberProfile = {
    name: "L. Moshoeshoe",
    role: "Admin Access",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK1pKcwVuSqvIljwIFSDb6JU7C70WuROHLqWRyCIbSKcZBgZC8kaX2H7Qx_OmnhJdohKO6mZDcBBEKz86HBBOTRSYLG5GjmkNT3QKsP_QdrGzKhZnCznSqbylzdTfZjGqw3FOBnYeYDJXgNcDNm-Ecp6FVc1x7FSWWmZAv-p81vimRrrrr9fTCML9aFqZY1FFI9wuWKrSvlcEqDc1dASCpPkMS9G4P1VZn9dHFbF1mhZowHsCLHu73W4bv09hrMiGv9J7qRkhxj7Ls",
    annualCommitment: 100000,
};
