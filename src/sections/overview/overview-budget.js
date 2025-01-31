import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';
import GaugeD3 from 'src/components/gaugeD3';

export const OverviewBudget = (props) => {
  const { difference, positive = false, sx, value, currentName } = props;

  return (
    <Card sx={sx}>
      <CardContent sx={{paddingTop:'10px'}}>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-evenly"
          spacing={6}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              {currentName}
            </Typography>
            <Typography variant="h4">
              {`${value}%`}
            </Typography>
          </Stack>
          <GaugeD3 value={props.value}/>

        </Stack>
        {difference && (
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ mt: -1, marginLeft: 4 }}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={0.5}
            >
              <SvgIcon
                color={positive ? 'success' : 'error'}
                fontSize="small"
              >
                {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </SvgIcon>
              <Typography
                color={positive ? 'success.main' : 'error.main'}
                variant="body2"
              >
                {difference}%
              </Typography>
            </Stack>
            <Typography
              color="text.secondary"
              variant="caption"
            >
              전월 대비
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

OverviewBudget.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};
